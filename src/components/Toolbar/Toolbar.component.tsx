import { useState } from 'react';
import { useMatch } from 'react-router-dom';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import { IToolbarProps } from '../../types/Interfaces';

import {
  ToolbarControlButtonsStyles,
  ToolbarServicesButtonsStyles,
  ToolbarStyles,
  ToolbarTitleStyles,
} from './Toolbar.styles';

import lettersDown from '../../assets/img/icons/sort-az.svg';
import lettersUp from '../../assets/img/icons/sort-za.svg';
import numbersDown from '../../assets/img/icons/sort-9-0.svg';
import numbersUp from '../../assets/img/icons/sort-0-9.svg';
import { downloadList } from '../../utilities/downloadList';
import { useGetProductsQuery, useAddProductMutation } from '../../store/product/productsApi';
import Modal from '../Modal/Modal';
import { Box, TextField, Typography } from '@mui/material';
import { ModalInputBoxStyles } from '../Modal/Modal.styles';

function Toolbar({ title, icon, button }: IToolbarProps) {
  const [sortOfLetters, setSortOfLetters] = useState(true);
  const [sortOfPrice, setSortOfPrice] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [value, setValue] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const { data = [] } = useGetProductsQuery('');
  // console.log('state:', data);
  const [addProduct, {}] = useAddProductMutation();

  const handleOpenAddModal = () => {
    setShowModal(true);
  };

  const handleAddProduct = async () => {
    if (value) {
      await addProduct({
        id: (data.length + 1).toString(),
        title: value.title,
        description: value.description,
        image: value.image,
        price: value.price,
        rating: {
          rate: 0,
          count: 0,
        },
      }).unwrap();
    }
    setValue({
      title: '',
      description: '',
      image: '',
      price: '',
      rating: {
        rate: 0,
        count: 0,
      },
    });
  };

  const handleLettersSort = () => {
    setSortOfLetters(prev => !prev);
  };

  const handleNumbersSort = () => {
    setSortOfPrice(prev => !prev);
  };

  const handleDownload = () => {
    if (data) {
      downloadList(data);
    }
  };

  const match = useMatch('/admin-control/products');

  return (
    <ToolbarStyles>
      <ToolbarTitleStyles>
        {icon}
        {title}
        {button}
      </ToolbarTitleStyles>

      <ToolbarControlButtonsStyles>
        {match && (
          <ToolbarServicesButtonsStyles>
            <Button onClick={handleOpenAddModal} variant="outlined" color="inherit" size="small" sx={{ pr: '12px' }}>
              <AddIcon sx={{ mr: '4px' }} />
              Добавить товар
            </Button>

            <Button onClick={handleDownload} variant="outlined" color="inherit" size="small" sx={{ pr: '12px' }}>
              <FileDownloadOutlinedIcon sx={{ mr: '4px' }} />
              Выгрузить список
            </Button>
          </ToolbarServicesButtonsStyles>
        )}

        <Button onClick={handleLettersSort} variant="outlined" color="inherit" size="small">
          {sortOfLetters ? <img src={lettersDown} alt="Сортировка" /> : <img src={lettersUp} alt="Сортировка" />}
        </Button>

        <Button onClick={handleNumbersSort} variant="outlined" color="inherit" size="small">
          {sortOfPrice ? <img src={numbersDown} alt="Сортировка" /> : <img src={numbersUp} alt="Сортировка" />}
        </Button>
      </ToolbarControlButtonsStyles>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Typography variant="h6" mb={2}>
          Добавить новый товар
        </Typography>
        <ModalInputBoxStyles autoComplete="off">
          <TextField
            value={value.title}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue(prev => ({ ...prev, title: event.target.value }));
            }}
            size="small"
            label="Наименование"
            type="text"
          />
          <TextField
            value={value.description}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue(prev => ({ ...prev, description: event.target.value }));
            }}
            size="small"
            label="Описание"
            type="text"
          />
          <TextField
            value={value.image}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue(prev => ({ ...prev, image: event.target.value }));
            }}
            size="small"
            label="URL Картинки"
            type="text"
          />
          <TextField
            value={value.price}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setValue(prev => ({ ...prev, price: event.target.value }));
            }}
            size="small"
            label="Цена"
            type="text"
          />
        </ModalInputBoxStyles>
        <Box>
          <Button variant="outlined" sx={{ mr: '40px' }} onClick={() => setShowModal(false)}>
            Закрыть
          </Button>
          <Button onClick={handleAddProduct} variant="outlined" color="success">
            Добавить
          </Button>
        </Box>
      </Modal>
    </ToolbarStyles>
  );
}

export default Toolbar;
