import { useEffect } from 'react'

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - EBookSite`;
  }, [title])

  return null;
}
