import { useState, useCallback } from 'react';
import ApiService from '@/services/api';

export const usePage = (userId) => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ApiService.getDataById(userId);
      setPages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const createPage = useCallback(async (pageData) => {
    try {
      setLoading(true);
      setError(null);
      const newPage = await ApiService.createPage({
        ...pageData,
        user_id: userId
      });
      setPages(prev => [...prev, newPage]);
      return newPage;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const updatePage = useCallback(async (id, updates) => {
    try {
      setLoading(true);
      setError(null);
      const updatedPage = await ApiService.updatePage(id, updates);
      setPages(prev => prev.map(page => 
        page.id === id ? updatedPage : page
      ));
      if (currentPage?.id === id) {
        setCurrentPage(updatedPage);
      }
      return updatedPage;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  const deletePage = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);
      await ApiService.deletePage(id);
      setPages(prev => prev.filter(page => page.id !== id));
      if (currentPage?.id === id) {
        setCurrentPage(null);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  return {
    pages,
    currentPage,
    setCurrentPage,
    loading,
    error,
    fetchPages,
    createPage,
    updatePage,
    deletePage
  };
}; 