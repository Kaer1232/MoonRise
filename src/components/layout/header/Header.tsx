import { readConfigFile } from "typescript";
import styled from "@emotion/styled";
import logoImg from "./sun-logo.jpg"
import { Search } from "@mui/icons-material";
import styles from "./Header.module.css";
import { useState } from "react";

const Headers: React.FC = () => {
    const [IsSearchActive, setIsSearchActive] =useState(false)
    return(
        <header className={styles.header}>
            <div className={styles['image-wrapper']}>
                <img src="" alt=""/>
            </div>
            <div className={styles.wrapper}>
                {!IsSearchActive &&
                <Search/>
                }  
            <input type="text" placeholder="Поиск" onClick={
                () => setIsSearchActive(true)
            }/>
            </div>
        </header>
    )
}

export default Headers;