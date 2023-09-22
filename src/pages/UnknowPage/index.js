import * as S from "./styled";
import React, {useEffect}  from 'react';
import  { useNavigate } from 'react-router-dom'

export default function UnknownPage() {
    const navigating = useNavigate()

    useEffect(() => {
      setTimeout(() => {
          navigating('/')
      }, 2000)
    }, []);

    return(
        <S.Center>
            <h1>Not Found Page</h1>
            <h2>You are being redirected...</h2>
        </S.Center>
    )
}
