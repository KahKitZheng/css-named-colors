import React from "react";
import colors from "../data.json";
import styled from "styled-components";
import ColorValue from "./ColorValue";
import { toast } from "react-toastify";

const StyledList = styled.div`
  margin: 4rem auto;
  border-radius: 8px;
  max-width: 768px;

  @media (max-width: 768px) {
    margin: 2rem 1rem;

    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
  }
`;

const ColorGroupName = styled.h3`
  text-transform: capitalize;
  margin-bottom: 0.75rem;
`;

const ColorTable = styled.table`
  /* border-collapse: collapse; */
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.1);
`;

/* Hide table headers (but not display: none;, for accessibility) */
const TableHead = styled.thead`
  @media (max-width: 768px) {
    tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
  }
`;

/* Zebra striping */
const TableRow = styled.tr`
  td {
    height: 3rem;
  }

  @media (max-width: 768px) {
    border: 1px solid gainsboro;

    td {
      /* Behave like a "row" */
      border: none;
      border-bottom: 1px solid #f4f4f4;
      position: relative;
      padding: 11px 0 0 50%;
      padding-top: 11px;
      padding-left: 50%;
      height: 2.75rem;
      width: 100%;

      /* Now like a table header */
      :before {
        position: absolute;
        top: 13px;
        left: 13px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
      }
    }
  }
`;

const TableHeader = styled.th`
  color: black;
  font-size: 13px;
  text-align: left;
  text-transform: uppercase;
  opacity: 0.3;
  padding: 1rem 0.5rem 0.5rem 1rem;
  height: 2rem;
`;

const ColorBlock = styled.div`
  height: 1.75rem;
  width: 3.5rem;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 1.25rem;
    width: 2.5rem;
  }
`;

const ColorPreview = styled.td`
  min-width: 1rem;
  padding: 0 0.5rem 0 1rem;

  @media (max-width: 768px) {
    :before {
      content: "Color";
    }
  }
`;

const ColorName = styled.td`
  min-width: 11rem;
  padding: 0 0.5rem 0 1rem;

  @media (max-width: 768px) {
    :before {
      content: "Name";
    }
  }
`;

const ColorHex = styled.td`
  min-width: 7rem;
  padding: 0 0.5rem 0 1rem;

  @media (max-width: 768px) {
    :before {
      content: "Hex";
    }
  }
`;

const ColorRGB = styled.td`
  min-width: 10rem;
  padding: 0 0.5rem 0 1rem;

  @media (max-width: 768px) {
    :before {
      content: "RGB";
    }
  }
`;

const ColorHSL = styled.td`
  min-width: 10rem;
  padding: 0 0.5rem 0 1rem;

  @media (max-width: 768px) {
    :before {
      content: "HSL";
    }
  }
`;

const ColorList = ({ colorGroup }) => {
  const list = colors.filter((color) => color.group === colorGroup);

  const notify = (color) => {
    toast(`${color} copied! 👍`, {
      theme: "dark",
      position: "bottom-right",
      autoClose: 4000,
      draggable: false,
      closeOnClick: true,
      pauseOnHover: false,
      progress: undefined,
      hideProgressBar: true,
    });
  };

  return (
    <StyledList>
      <ColorGroupName>{colorGroup} - CSS Named Colors</ColorGroupName>
      <ColorTable>
        <TableHead>
          <TableRow>
            <TableHeader>Color</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Hex</TableHeader>
            <TableHeader>RGB</TableHeader>
            <TableHeader>HSL</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {list.map((color) => (
            <TableRow key={color.name}>
              <ColorPreview>
                <ColorBlock color={color.name} />
              </ColorPreview>
              <ColorName>
                <div onClick={() => notify(color.name)}>
                  <ColorValue color={color.name} small={true} />
                </div>
              </ColorName>
              <ColorHex>
                <div onClick={() => notify(color.hex)}>
                  <ColorValue color={color.hex} small={true} />
                </div>
              </ColorHex>
              <ColorRGB>
                <div onClick={() => notify(`rgb(${color.rgb})`)}>
                  <ColorValue color={`rgb(${color.rgb})`} small={true} />
                </div>
              </ColorRGB>
              <ColorHSL>
                <div onClick={() => notify(`hsl(${color.hsl})`)}>
                  <ColorValue color={`hsl(${color.hsl})`} small={true} />
                </div>
              </ColorHSL>
            </TableRow>
          ))}
        </tbody>
      </ColorTable>
    </StyledList>
  );
};

export default ColorList;
