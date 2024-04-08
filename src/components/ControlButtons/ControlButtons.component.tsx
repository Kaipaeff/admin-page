import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { ControlButtonsContainer } from './ControlButtons.styles';
import Modal from '../Modal/Modal';
// import { blue } from '../../styles/Colors';
import { useDeleteProductMutation } from '../../store/product/productsApi';
import { IControlButtonsProps } from '../../types/Interfaces';
import { useNavigate } from 'react-router-dom';

function ControlButtons({ id }: IControlButtonsProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  // const [value, setValue] = useState({
  //   title: '',
  //   description: '',
  //   image: '',
  //   price: '',
  //   rating: {
  //     rate: 0,
  //     count: 0,
  //   },
  // });
  const [deleteProduct, {}] = useDeleteProductMutation();
  const navigate = useNavigate();

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = async (id: string) => {
    await deleteProduct(id).unwrap();
    navigate('/admin-control/products');
  };

  const handleEdit = (event: React.MouseEvent<SVGSVGElement>) => {
    // setIsEditing(true);
    event.preventDefault();
    event.stopPropagation();
    console.log('Clicked on Edit');
  };

  // const handleSave = async () => {
  //   try {
  //     let updatedTodo = [...todo];
  //     const taskIndex = updatedTodo.findIndex(todoItem => todoItem.id === task.id);
  //     if (taskIndex !== -1) {
  //       const abortController = new AbortController();
  //       const signal = abortController.signal;
  //       updatedTodo[taskIndex] = { ...updatedTodo[taskIndex], title: editedTask };
  //       setTodo(updatedTodo);
  //       setIsEditing(false);
  //       await updateTaskApi(task.id, { title: editedTask }, signal);
  //       setNotification({
  //         open: true,
  //         type: 'success',
  //         message: 'Задача успешно сохранена!',
  //       });
  //     }
  //   } catch (error: any) {
  //     console.error('Error saving todo:', error.message);
  //   }
  // };
  return (
    <>
      <ControlButtonsContainer>
        <Button variant="outlined" color="primary" onClick={() => setShowModal(false)}>
          Изменить
        </Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          Удалить
        </Button>
      </ControlButtonsContainer>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Typography variant="button" mb={3}>
          Вы уверены, что хотите удалить данный товар ?
        </Typography>
        <Box>
          <Button variant="outlined" color="inherit" sx={{ mr: '40px' }} onClick={() => setShowModal(false)}>
            Отмена
          </Button>
          <Button variant="outlined" color="info" onClick={() => handleConfirmDelete(id)}>
            Удалить
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default ControlButtons;
