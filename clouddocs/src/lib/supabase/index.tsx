import { Database } from '@/type/database';
import { createClient } from '@supabase/supabase-js';



export class SupabaseService {
  private static instance: SupabaseService;
  private supabase;

  private constructor() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase URL and Key must be provided');
    }
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  public static getInstance(): SupabaseService {
    if (!SupabaseService.instance) {
      SupabaseService.instance = new SupabaseService();
    }
    return SupabaseService.instance;
  }

  // Document Methods
    async getDocuments(userId: string,limit: number) {
    const { data, error } = await this.supabase
      .from('documents')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    return {data , error};
    }

    async getListSearch( userId: string) {
      const { data, error } = await this.supabase
        .from('documents')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(5);
        return { data, error };
    }

    async getDocumentById(id: string | undefined) {
    const { data, error } = await this.supabase
      .from('documents')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new Error(`Error fetching documents: ${error.message}`);
    return data;
    }

    async createDocument(document: any) {
        const { data, error } = await this.supabase
          .from('documents')
          .insert(document)
          .select()
          .single();

        if (error) return error;
        return data;
    }

    async updateDocument<Type>(id: string, updates: Type) {
        const { data, error } = await this.supabase
          .from('documents')
          .update(updates)
          .eq('id', id)
          .select()
          .single();

        if (error) return error;
        return data;
    }

    async deleteDocument(id: string) {
        const { error ,data } = await this.supabase
          .from('documents')
          .delete()
          .eq('id', id);
        return {data,error}
    }

    async searchDocuments(query: string , userId: string) {
      let { data, error } = await this.supabase
        .from('documents')
        .select('*')
        .or(`name.ilike.%${query}%, content.ilike.%${query}%`)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      return {data, error};
    }


}

// Custom hook using the service
export function useSupabase() {
  return SupabaseService.getInstance();
}