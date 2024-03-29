import React, { FC } from "react";
import logo from "../../assets/logo.png";
import { Content, List, SubList, Wrapper, Top } from "./style";

interface IProps {
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
  search?: JSX.Element | null;
}

const Nav: FC<IProps> = ({ setBurger, search }) => {
  const navLi = [
    {
      main: "Женщинам",
      sub: ["платья", "юбки", "кофты", "сарафаны", "косынки"],
    },
    {
      main: "Мужчинам",
      sub: ["брюки", "джинсы", "шорты", "пиджаки", "футболки"],
    },
    {
      main: "Детям",
      sub: [
        "брюки",
        "джинсы",
        "шорты",
        "пиджаки",
        "футболки",
        "платья",
        "юбки",
        "кофты",
        "сарафаны",
        "косынки",
      ],
    },
    {
      main: "Обувь",
      sub: ["ботинки", "туфли", "кеды", "сапоги"],
    },
    {
      main: "Игрушки",
      sub: ["конструктор", "мягкие", "головоломки", "машинки", "солдатики"],
    },
    {
      main: "Аксессуары",
      sub: ["ремни", "шарфы", "шапки", "кепки", "солнечные очки"],
    },
    {
      main: "Большие размеры",
      sub: ["4XL", "3XL", "2XL"],
    },
    {
      main: "Дополнительно",
      sub: [],
    },
    {
      main: "Акции",
      sub: [],
    },
  ];

  return (
    <Content>
      {search && (
        <Top onClick={(e) => e.stopPropagation()}>
          <h4>Каталог</h4>
          {search}
        </Top>
      )}
      <Wrapper>
        <List
          onClick={(e) => e.stopPropagation()}
          height={search ? "80vh" : "90vh"}
        >
          <div onClick={() => setBurger(false)}>
            <img src={logo} alt="logo" />
          </div>
          <ul>
            {navLi.map((item, index) => {
              return (
                <li key={index}>
                  <span>{item.main}</span>
                  {item.sub.length ? (
                    <SubList>
                      {item.sub.map((item, index) => {
                        return (
                          <li key={index}>
                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </SubList>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </List>
      </Wrapper>
    </Content>
  );
};

export default Nav;
