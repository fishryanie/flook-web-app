interface namePage {
  default: string;
  home: string;
  detail: string;
  chapter: string;
  about: string;
  forums: string;
  contact: string;
  apply: string;
  admin: string;
  dashboard: string;
  tableAuth: string;
  tableAuthor: string;
  tableGenre: string;
  tableEbook: string;
  tableChapter: string;
  manga: string;
  movie: string;
  error: string;
}

const namePage: namePage = {
  default: '/',
  home: '/home',
  detail: '/detail',
  chapter: '/chapter',
  about: '/about',
  contact: '/contact',
  apply: '/apply',
  forums: '/forums',
  manga: '/manga',
  movie: '/movie',
  admin: '/admin',
  error: '/NotFound-404',



  dashboard: '/admin/dashboard',
  tableAuth: '/admin/table/auth',
  tableChapter: '/admin/table/books/chapters',
  tableAuthor: '/admin/table/books/authors',
  tableGenre: '/admin/table/books/genres',
  tableEbook: '/admin/table/books/ebooks',
  
  
}

export default namePage
