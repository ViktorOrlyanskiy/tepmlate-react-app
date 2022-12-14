import { FC } from "react";
import { Link } from "react-router-dom";
import { RoutePath } from "shared/const";
import { classNames } from "shared/lib";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <Link to={RoutePath.main}>Главная</Link>
            </div>
        </div>
    );
};
