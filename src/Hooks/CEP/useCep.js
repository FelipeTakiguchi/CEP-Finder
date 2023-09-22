import axios from 'axios';
import { useEffect, useState } from 'react';

const useCep = (initialValue) => {
    const [cep, setCep] = useState(String(initialValue))
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [valido, setValido] = useState("");

    async function setValues() {
        setCep(cep.replace(' ', ''));
        setRua("");
        setBairro("");
        setCidade("");
        setEstado("");

        if (cep.length == 8 && !isAlpha(cep)) {
            const res = await axios.get('http://viacep.com.br/ws/' + cep + '/json');

            if (res.data.erro) {
                setValido("CEP INVÁLIDO");
                return false;
            }

            setRua(res.data.logradouro);
            setBairro(res.data.bairro);
            setCidade(res.data.localidade);
            setEstado(res.data.uf);
        }

        setValido("");
        return true;
    }

    useEffect(() => {
        setValues();
    }, [cep])

    function isAlpha(str) {
        var code, i, len;

        for (i = 0, len = str.length; i < len; i++) {
            code = str.charCodeAt(i);

            if (!(code > 64 && code < 91) && !(code > 96 && code < 123)) {
                return false
            }
        }
        return true;
    };

    return { setCep, rua, bairro, cidade, estado, valido };
}

export default useCep;