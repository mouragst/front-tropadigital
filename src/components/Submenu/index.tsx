import React from "react";
import { SubmenuContainer, Option } from "./styles";
import { EyeSVG, EditIcon, TrashIcon } from "../../assets/svgs";

interface SubmenuProps {
  onView: () => void;
  onEdit: () => void;
  onRemove: () => void;
}

export const Submenu: React.FC<SubmenuProps> = ({ onView, onEdit, onRemove }) => (
  <SubmenuContainer>
    <Option onClick={onView}>
      <EyeSVG visible={true} color="#000" />
      Visualizar
    </Option>
    <Option onClick={onEdit}>
      <EditIcon />
      Editar
    </Option>
    <Option danger onClick={onRemove}>
      <TrashIcon />
      Remover
    </Option>
  </SubmenuContainer>
);