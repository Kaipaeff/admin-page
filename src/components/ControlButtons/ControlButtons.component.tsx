import { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import { ControlButtonsContainer } from './ControlButtons.styles';
import Modal from '../Modal/Modal';
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from '../../store/product/productsApi';
import { IControlButtonsProps } from '../../types/Interfaces';
import { useNavigate } from 'react-router-dom';
import { ModalInputBoxStyles } from '../Modal/Modal.styles';

function ControlButtons({ id }: IControlButtonsProps) {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [value, setValue] = useState({
    title: '',
    description: '',
    image: '',
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const { data = [] } = useGetProductsQuery('');
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  const navigate = useNavigate();

  useEffect(() => {
    const product = data.find(product => product.id === id);
    if (product) {
      setValue({
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
        rating: product.rating,
      });
    }
  }, [data, id]);

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async (id: string) => {
    await deleteProduct(id).unwrap();
    navigate('/admin-control/products');
  };

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleSave = async () => {
    await updateProduct({ id, ...value });
    setShowEditModal(false);
  };

  return (
    <>
      <ControlButtonsContainer>
        <Button variant="outlined" color="primary" onClick={handleEdit}>
          Изменить
        </Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          Удалить
        </Button>
      </ControlButtonsContainer>

      <Modal open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Typography variant="button" mb={3}>
          Вы уверены, что хотите удалить данный товар ?
        </Typography>
        <Box>
          <Button variant="outlined" color="inherit" sx={{ mr: '40px' }} onClick={() => setShowDeleteModal(false)}>
            Отмена
          </Button>
          <Button variant="outlined" color="error" onClick={() => handleConfirmDelete(String(id))}>
            Удалить
          </Button>
        </Box>
      </Modal>

      <Modal open={showEditModal} onClose={() => setShowEditModal(false)}>
        <Typography variant="h6" mb={2}>
          Редактировать товар
        </Typography>
        <ModalInputBoxStyles autoComplete="off">
          <TextField
            value={value.title}
            onChange={event => setValue(prev => ({ ...prev, title: event.target.value }))}
            size="small"
            label="Наименование"
            type="text"
          />
          <TextField
            value={value.description}
            onChange={event => setValue(prev => ({ ...prev, description: event.target.value }))}
            size="small"
            label="Описание"
            type="text"
          />
          <TextField
            value={value.image}
            onChange={event => setValue(prev => ({ ...prev, image: event.target.value }))}
            size="small"
            label="URL Картинки"
            type="text"
          />
          <TextField
            value={value.price}
            onChange={event => setValue(prev => ({ ...prev, price: Number(event.target.value) }))}
            size="small"
            label="Цена"
            type="text"
          />
        </ModalInputBoxStyles>

        <Box>
          <Button variant="outlined" color="inherit" sx={{ mr: '40px' }} onClick={() => setShowEditModal(false)}>
            Отмена
          </Button>
          <Button onClick={handleSave} variant="outlined" color="info">
            Сохранить
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default ControlButtons;
