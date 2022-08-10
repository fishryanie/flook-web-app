import { useState, useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
//Store
import Action from '../../Store/Actions'
//Mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
//Icon
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//Components
import CardImage from '../../Components/CardImage';
import TextFieldSearch from '../../Components/TextFieldSearch';
import { toast } from 'react-toastify';
import { toastConfig } from '../../Functions/toast';



interface MangaPageProps {
  Carousel?: boolean | undefined;
  type?: string | undefined;
}

interface Select {
  id: number,
  name: string,
}

export const selectStatus: Array<Select> = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Is Updating' },
  { id: 3, name: 'Comepleted' },
]

export const selectAllowedAge: Array<Select> = [
  { id: 1, name: 'Lower 12 age' },
  { id: 2, name: '12 - 18 age' },
  { id: 3, name: '18 - 30 age' },
  { id: 4, name: 'More than 30 age' }
]

export const selectChapters: Array<Select> = [
  { id: 1, name: 'Lower 50 chapters' },
  { id: 2, name: '50 - 150 chapters' },
  { id: 3, name: '150 - 250 chapters' },
  { id: 4, name: '250 - 500 chapters' },
  { id: 5, name: '500 - 800 chapters' },
  { id: 6, name: '800 - 1000 chapters' },
  { id: 7, name: 'More than 1000 chapters' },
]


const MangaPage: React.FC = () => {

  const ListBook = useSelector((state: RootStateOrAny) => state.BookReducer.listBook)
  const ListAuthor = useSelector((state: RootStateOrAny) => state.BookReducer.listAuthor)
  const ListGenres = useSelector((state: RootStateOrAny) => state.BookReducer.listGenre)
  const CountBook = useSelector((state: RootStateOrAny) => state.BookReducer.countBook)

  const countComic = CountBook % 12 === 0 ? parseInt((CountBook / 12).toString()) : parseInt((CountBook / 12).toString()) + 1
  const [openMenuStyle, setOpenMenuStyle] = useState({ opacity: 0, height: 0, visibility: 'hidden' })
  const [animate, setAnimaie] = useState('animate__animated animate__zoomIn')
  const [openMenu, setOpenMenu] = useState(false);
  const [radio, setRadio] = useState('');
  const [view, setView] = useState('list');
  const [page, setPage] = useState(1)
  const [data, setData] = useState({
    page: page,
    sort: radio,
    newDay: false
  })

  const { control, register, setValue, reset, handleSubmit } = useForm({ defaultValues: data })

  const dispatch = useDispatch()
  const handleClickMenu = () => setOpenMenu(!openMenu)

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => { setView(nextView) };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    setData({ ...data, page: value })
  };

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>, newRadio: string) => {
    setRadio(newRadio);
  };

  const onSubmit = (data: any) => {
    data.page = page
    data.sort = radio
    data.newDay = (radio === "sort-by-newest" ? true : false)
    setData({ ...data, data })
    dispatch(Action.app.searchEbook(data))
    console.log("🚀 ~ file: index.tsx ~ line 106 ~ onSubmit ~ data", data)
  }


  useEffect(() => {
    setOpenMenuStyle({
      ...openMenuStyle,
      opacity: openMenu ? 1 : 0,
      height: openMenu ? 300 : 0,
      visibility: openMenu ? 'visible' : 'hidden',
    })
  }, [openMenu])


  useEffect(() => {
    dispatch(Action.app.searchEbook(data))
    dispatch(Action.app.findManyGenre())
    dispatch(Action.app.findManyAuthor())
  }, [dispatch, data])

  return (
    <section className='manga-page'>
      {/* alphabet-sorting */}
      <ul className={`reset-block alphabet-sorting ${animate}`} onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)}>
        <li><a href="#">ALL</a></li>
        <li><a href="#">#</a></li>
        <li><a href="#">A</a></li>
        <li><a href="#">B</a></li>
        <li><a href="#">C</a></li>
        <li><a href="#">D</a></li>
        <li><a href="#">E</a></li>
        <li><a href="#">F</a></li>
        <li><a href="#">G</a></li>
        <li><a href="#">H</a></li>
        <li><a href="#">J</a></li>
        <li><a href="#">K</a></li>
        <li><a href="#">L</a></li>
        <li><a href="#">M</a></li>
        <li><a href="#">N</a></li>
        <li><a href="#">O</a></li>
        <li><a href="#">P</a></li>
        <li><a href="#">Q</a></li>
        <li><a href="#">R</a></li>
        <li><a href="#">S</a></li>
        <li><a href="#">T</a></li>
        <li><a href="#">U</a></li>
        <li><a href="#">V</a></li>
        <li><a href="#">W</a></li>
        <li><a href="#">X</a></li>
        <li><a href="#">Y</a></li>
        <li><a href="#">Z</a></li>
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Box className='manga-menu'>
          <Box className='container' sx={{ pt: 4, pb: 2 }}>
            <Grid container spacing={2} sx={{ alignSelf: 'center', alignItems: 'center', alignContent: 'center', height: '100%' }}>
              <Grid item xs={12} sm={12} md={7} >
                <FormControl>
                  <Controller
                    control={control}
                    name="sort"
                    render={({ field }) => (
                      <RadioGroup
                        row 
                        aria-labelledby="sort-label" {...field}
                        name="controlled-radio-buttons-group"
                        value={radio}
                        onChange={handleChangeRadio}
                      >
                        <Breadcrumbs aria-label="breadcrumb">
                          <FormControlLabel control={<Radio size="small" />} value="name" label="XẾP TỪ A-Z" />
                          <FormControlLabel control={<Radio size="small" />} value="score" label="XẾP THEO ĐIỂM" />
                          <FormControlLabel control={<Radio size="small" />} value="sort-by-newest" label="XẾP THEO NGÀY RA MẮT" />
                          <FormControlLabel control={<Radio size="small" />} value="view" label="XẾP THEO LƯỢT XEM" />
                        </Breadcrumbs>
                      </RadioGroup>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={10} sm={10} md={3} sx={{ textAlign: 'center' }}>
                <Box className='manga-menu-btn' onClick={handleClickMenu}>
                  <Typography color='#616161' variant='h4'>TÌM KIẾM NÂNG CAO</Typography>
                  {openMenu ? <KeyboardArrowDownIcon /> : <NavigateNextIcon />}
                </Box>
              </Grid>
              <Grid item xs={2} sm={2} md={2} sx={{ textAlign: 'right' }}>
                <ToggleButtonGroup size='small' exclusive orientation="horizontal" value={view} onChange={handleChange}>
                  <ToggleButton value="list" aria-label="list"><ViewListIcon /></ToggleButton>
                  <ToggleButton value="module" aria-label="module"><ViewModuleIcon /></ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>

          </Box>
        </Box>


        {/* Dropdown fillter */}
        <Box className='manga-menu-dropdown' sx={openMenuStyle}>
          <Grid className='container' container sx={{ pt: 5, pb: 5 }}>
            <Grid item xs={12} sm={6} md={4} sx={{ p: 1 }}><TextFieldSearch register={register} setValue={setValue} field='search' label="Tìm kiếm" placeholder="Tìm kiếm" options={selectAllowedAge} /></Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ p: 1 }}><TextFieldSearch register={register} setValue={setValue} field='author' label="Tác Giả" placeholder="Tác Giả" options={ListAuthor} /></Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ p: 1 }}><TextFieldSearch register={register} setValue={setValue} field='genre' label="Thể Loại" placeholder="Thể Loại" options={ListGenres} /></Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ p: 1 }}><TextFieldSearch register={register} setValue={setValue} field='allowedAge' label="Độ Tuổi" placeholder="Độ Tuổi" options={selectAllowedAge} /></Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ p: 1 }}><TextFieldSearch register={register} setValue={setValue} field='chapter' label="Tập" placeholder="Tập" options={selectChapters} /></Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ p: 1 }}><TextFieldSearch register={register} setValue={setValue} field='status' label="Trạng Thái" placeholder="Trạng Thái" options={selectStatus} /></Grid>
          </Grid>
          <Box className="manga-btn-search">
            <span>
              <button><i className="fa-solid fa-arrow-rotate-left"></i>Xóa</button>
              <button type="submit"><i className="fa-solid fa-magnifying-glass"></i>Tìm Kiếm</button>
            </span>
          </Box>
        </Box>
      </form >


      {/* ITEM CARD */}
      < Box sx={{ mt: 5 }}>
        <Box className='container'>
          <Grid container spacing={1} rowSpacing={4}>
            {ListBook?.map((item: any, index: number) => {
              return (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <CardImage index={index} item={item} />
                </Grid>
              )
            })}
          </Grid>
          {/* Pagination */}
          <Stack sx={{ mt: 5, mb: 5 }}>
            <Pagination size="large" variant="outlined" shape="rounded"
              showFirstButton
              showLastButton
              count={countComic}
              page={page} onChange={handleChangePage}
            />
          </Stack>
        </Box>
      </Box >
    </section >
  );
}

export default MangaPage
