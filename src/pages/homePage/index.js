import * as S from "./styled";
import React, { useContext, useEffect, useState } from 'react';
import NavBar from "../../components/NavBar";
import useCep from '../../Hooks/CEP/useCep';
import axios from "axios";
import { DarkModeContext } from "../../context/darkMode";

export default function HomePage() {
    const { setCep, bairro, cidade, estado, rua, valido } = useCep("");
    const { primaryColor, secondaryColor, terciaryColor } = useContext(DarkModeContext);

    return (
        <>
            <NavBar />
            <S.Content style={{ background: terciaryColor }}>
                <S.Describe style={{ color: primaryColor }}>Input</S.Describe>
                <S.Pad>
                    <S.Input type="text" onChange={(e) => setCep(e.target.value)}></S.Input>
                </S.Pad>
            </S.Content>
            <S.Content style={{ background: terciaryColor }}>
                <S.Describe style={{ color: primaryColor }}>Output</S.Describe>
                <S.SubDescribe style={{ color: primaryColor }}>Rua</S.SubDescribe>
                <S.Output>{rua}</S.Output>
                <S.SubDescribe style={{ color: primaryColor }}>Bairro</S.SubDescribe>
                <S.Output>{bairro}</S.Output>
                <S.SubDescribe style={{ color: primaryColor }}>Cidade</S.SubDescribe>
                <S.Output>{cidade}</S.Output>
                <S.SubDescribe style={{ color: primaryColor }}>Estado</S.SubDescribe>
                <S.Output>{estado}</S.Output>
            </S.Content>
            <S.Center>
                {valido != "" ? (<S.Message style={{ background: terciaryColor }}>{valido}</S.Message>) : (<div></div>)}
            </S.Center>
        </>
    )
}
