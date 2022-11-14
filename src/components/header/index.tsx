import { HeaderStyled, MenuStyled, MenuProfileStyled } from "./style";
import MotorShop from "../../img/Motors-shop.svg";
import Menu from "../../img/Menu-Header.svg";
import CloseMenu from "../../img/Close-Menu.svg";
import { useState } from "react";
import { useModal } from "../../providers/modal";
import { useUser } from "../../providers/user/index";
import { Redirect, useHistory } from "react-router-dom";

export const Header = () => {
  const { user } = useUser();
  const {
    inOnSucess,
    setInOnSucess,
    showModalSucess,
    hideModalSucess,
    showModalAnnouncement,
    inOnLogin,
    setInOnLogin,
    showModalLogin,
    hideModalLogin,
    setInOnRegister,
  } = useModal();

  const [yLoginRegister, setYLoginRegister] = useState(0);
  const [y, setY] = useState(-400);
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuProfile, setOpenMenuProfile] = useState(false);
  const history = useHistory();

  const openCloseMenuProfile = () => {
    setYLoginRegister(0);
    setTimeout(() => {
      return  y > 0 ? setY(-400) : setY(400);
    }, 500);
  };

  const openCloseMenuLoginRegister = () => {
    
    setOpenMenuProfile(false)
    setTimeout(() => {
      return  yLoginRegister > 0 ? setYLoginRegister(0) : setYLoginRegister(600);
    }, 500);
  };

  return (
    <>
      <HeaderStyled>
        <img className="logo-MotorsShop" src={MotorShop} alt="" />

        <nav className="nav--menu-desktop">
          <button className="nav--menu-desktop-button">Carros</button>
          <button
            className="nav--menu-desktop-button"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            Motos
          </button>

          <button
            className="nav--menu-desktop-button"
            onClick={() => {
              showModalAnnouncement();
              setOpenMenu(false);
            }}
          >
            Leilão
          </button>

          <div className="nav--login-register-desktop">
            <div id="div-line"></div>

            {user.initialsName ? (
              <>
                <p className="initials" onClick={() => openCloseMenuProfile()}>
                  {user?.initialsName}
                </p>
                <p className="name-profile"
                onClick={() => history.push("/profile")}
                >{user?.name}</p>
              </>
            ) : (
              <>
                <h4
                  onClick={() => setInOnLogin(true)}
                  className="nav--menu-desktop-h4"
                >
                  Fazer Login
                </h4>
                <button
                  onClick={() => setInOnRegister(true)}
                  className="nav--menu-desktop-button-register"
                >
                  Cadastrar
                </button>
              </>
            )}
          </div>
        </nav>

        <nav className="nav-menu">
          {user.initialsName && (
            <p
              className="initials"
              onClick={() => {
                openCloseMenuProfile();
              }}
            >
              {user?.initialsName}
            </p>
          )}
          {yLoginRegister === 0 ? (
            <>
              <button
                onClick={() => {
                  setOpenMenu(true);
                  openCloseMenuLoginRegister();
                }}
              >
                <img src={Menu} alt="" />
              </button>
            </>
          ) : (
            <button onClick={() =>{ 
              openCloseMenuLoginRegister();
            }}>
              {" "}
              <img src={CloseMenu} alt="" />{" "}
            </button>
          )}
        </nav>
      </HeaderStyled>

      {openMenu && (
        <MenuStyled  animate={{ y: yLoginRegister }} transition={{ type: "spring", duration: 0.5 }} >
          <nav className="nav--menu-mobile">
            <button
              className="nav--menu-mobile-button"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Carros
            </button>
            <button
              className="nav--menu-mobile-button"
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Motos
            </button>

            <button
              onClick={() => {
                setOpenMenu(false);
              }}
              className="nav--menu-mobile-button"
            >
              Leilão
            </button>
          </nav>

          {!user.initialsName && (
            <div className="nav--login-register-mobile">
              <h4
                className="nav--menu-mobile-h4"
                onClick={() => {
                  setInOnLogin(true);
                  setOpenMenu(false);
                }}
              >
                Fazer Login
              </h4>
              <button
                className="mobile-button-register"
                onClick={() => {
                  setInOnRegister(true);
                  setOpenMenu(false);
                }}
              >
                Cadastrar
              </button>
            </div>
          )}
        </MenuStyled>
      )} 

     <MenuProfileStyled animate={{ y }} transition={{ type: "spring", duration: 0.5 }} >
        <button>Editar Perfil</button>
        <button>Editar endereço</button>
        <button>Minhas Compras</button>
        <button
          onClick={() => {
            sessionStorage.clear();
            openCloseMenuProfile();
            history.push("/");
          }}
        >
          Sair
        </button>
      </MenuProfileStyled>
    </>
  );
};
