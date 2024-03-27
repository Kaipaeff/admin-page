import { IToolbarProps } from '../../types/Interfaces';
import { ToolbarTitleStyles } from './Toolbar.styles';

function Toolbar({ title, icon }: IToolbarProps) {
  return (
    <ToolbarTitleStyles>
      {icon}
      {title}
    </ToolbarTitleStyles>
  );
}

export default Toolbar;
