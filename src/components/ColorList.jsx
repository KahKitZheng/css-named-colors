import React from "react";
import colors from "../colors.json";
import styled from "styled-components";
import ColorValue from "./ColorValue";

const StyledList = styled.div`
  margin: 0 auto 4rem;
  border-radius: 8px;
  max-width: 768px;

  :first-child {
    margin-top: 4rem;
  }

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

  @media (min-width: 1500px) {
    margin: 0 auto 2rem;
  }
`;

const ColorGroupName = styled.h2`
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  font-size: 1.17em;
`;

const ColorTable = styled.table`
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.tableBackground};
  color: ${({ theme }) => theme.colors.textColor};
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
    border: ${({ theme }) => theme.colors.tableBorder};

    td {
      /* Behave like a "row" */
      border: none;
      border-bottom: 1px solid transparent;
      position: relative;
      padding: 6px 0 6px 50%;
      height: 2rem;
      width: 100%;
      display: inline-flex;
      align-items: center;

      /* Make it look like a table header */
      :before {
        position: absolute;
        top: 6px;
        left: 13px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
        font-weight: bold;
      }

      :first-child {
        height: 2.75rem;
        padding-top: 1rem;

        :before {
          top: 1rem;
        }
      }

      :last-child {
        height: 2.75rem;
        padding-bottom: 1rem;
      }
    }
  }
`;

const TableHeader = styled.th`
  color: ${({ theme }) => theme.colors.theadText};
  font-size: 13px;
  text-align: left;
  text-transform: uppercase;
  padding: 1rem 0.5rem 0.5rem 1rem;
  height: 2rem;
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

const ColorList = ({ id, colorGroup }) => {
  const list = colors.filter((color) => color.group === colorGroup);

  return (
    <StyledList id={id} className="colorGroup">
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
                <ColorValue color={color.name} small={true} type="block" />
              </ColorPreview>
              <ColorName>
                <ColorValue color={color.name} small={true} />
              </ColorName>
              <ColorHex>
                <ColorValue color={color.hex} small={true} />
              </ColorHex>
              <ColorRGB>
                <ColorValue color={`rgb(${color.rgb})`} small={true} />
              </ColorRGB>
              <ColorHSL>
                <ColorValue color={`hsl(${color.hsl})`} small={true} />
              </ColorHSL>
            </TableRow>
          ))}
        </tbody>
      </ColorTable>
    </StyledList>
  );
};

export default ColorList;
