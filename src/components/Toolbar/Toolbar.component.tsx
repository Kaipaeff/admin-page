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

function Toolbar({ title, icon, button }: IToolbarProps) {
  const [sortOfLetters, setSortOfLetters] = useState(true);
  const [sortOfPrice, setSortOfPrice] = useState(false);

  const handleLettersSort = () => {
    setSortOfLetters(prev => !prev);
  };

  const handleNumbersSort = () => {
    setSortOfPrice(prev => !prev);
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
            <Button variant="outlined" color="inherit" size="small" sx={{ pr: '12px' }}>
              <AddIcon sx={{ mr: '4px' }} />
              Добавить товар
            </Button>

            <Button variant="outlined" color="inherit" size="small" sx={{ pr: '12px' }}>
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
    </ToolbarStyles>
  );
}

export default Toolbar;
