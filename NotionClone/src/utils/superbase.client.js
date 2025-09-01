import { createClient } from "@supabase/supabase-js";

const VITE_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const VITE_SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY
const supBase = createClient(VITE_SUPABASE_URL,VITE_SUPABASE_ANON_KEY);

const getDataById  = async (id) =>{
    try {
        const {data} = await supBase
        .from("Pages")
        .select()
        .eq("user_id",id)
        .eq("is_delete",false)
        .is("parent_id",null)
        .order('id');
        return data;
    } catch (error) {
        console.log(error)
        return undefined
    }
}
const getDataById2  = async (id) =>{
    try {
        const {data} = await supBase
        .from("Pages")
        .select()
        .eq("id",id)
        .eq("is_delete",false)
        .order('id');
        return data;
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const getDataDelete = async (id) =>{
    try {
        const {data} = await supBase
        .from("Pages")
        .select()
        .eq("user_id",id)
        .eq("is_delete",true)
        .order('id');
        return data;
    } catch (error) {
        console.log(error)
        return undefined
    }
}





const getDataByUserId  = async (id) =>{
    try {
        const {data} = await supBase
        .from("Pages")
        .select()
        .eq("user_id",id)
        .eq("is_delete",false)
        .order('id');
        return data;
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const getDataByParentID  = async (id) =>{
    try {
        const {data} = await supBase.from("Pages").select().eq("parent_id",id).eq("is_delete",false).order("id");
        return data;
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const insertData = async (args) =>{
    try {
        const { data } = await supBase.from('Pages')
        .insert([
            args
        ])
        .select()
        return data
    }catch (error) {
        console.log(error)
        return undefined
    }
}

const publicPage = async(id,body)=>{
    try {
        console.log(id,body)
        const { data } = await supBase
        .from('Pages')
        .update({ is_public: body })
        .eq('id', id)
        .select()
        return data
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const updatePage = async(id,body)=>{
    try {
        const { data } = await supBase
        .from('Pages')
        .update(body)
        .eq('id', id)
        .select();

        body.parent_id = null
        const child = await supBase
        .from('Pages')
        .update(body)
        .eq('parent_id', id)
        .select()
        return data
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const deletePage = async (id,body) =>{
    // check id
    try {
        console.log(id,body)
        const { data } = await supBase
        .from('Pages')
        .update(body)
        .eq('id', id)
        .select()
        return data
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const updatePage2 = async(id,body)=>{
    try {
        const { data } = await supBase
        .from('Pages')
        .update(body)
        .eq('id', id)
        .select()
        return data
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const deletePageById = async(id)=>{
    try {
        const res = await supBase
        .from('Pages')
        .delete()
        .eq('id', id)

        const resChild = await supBase
        .from('Pages')
        .delete()
        .eq('parent_id', id)
        console.log(res,resChild)
        return true
    } catch (error) {
        console.log(error)
        return undefined
    }
}

export  {
    getDataById,
    insertData,
    getDataByParentID,
    publicPage,
    updatePage,
    getDataByUserId,
    updatePage2,
    getDataById2,
    getDataDelete,
    deletePageById
}
