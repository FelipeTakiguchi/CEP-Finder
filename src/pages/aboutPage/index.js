import * as S from "./styled";
import React, { useContext } from 'react';
import NavBar from "../../components/NavBar";
import useCep from '../../Hooks/CEP/useCep';
import { Title } from "../../components/NavBar/styled";
import { DarkModeContext } from "../../context/darkMode";

export default function HomePage() {
    const { primaryColor, secondaryColor, terciaryColor } = useContext(DarkModeContext);
    const { setCep } = useCep;

    async function getRes(cep) {
        if (cep.length == 6)
            setCep(cep)
    }

    return (
        <>
            <NavBar />
            <S.Content style={{background: terciaryColor}}>
                <Title style={{color: primaryColor}}>Lorem Ipsum</Title>
                <S.Pad style={{color: primaryColor}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum enim eget sem mollis, id imperdiet lectus volutpat. Vivamus ac gravida leo. Suspendisse sed sodales nisl. Vestibulum interdum sed est vitae sodales. Nulla at molestie purus. Sed dolor urna, vehicula quis metus ac, tempor tincidunt enim. Sed faucibus felis vel est fermentum, ac pellentesque nisi aliquet. Praesent feugiat leo a quam egestas porta. Fusce quam lacus, consectetur sed lacinia quis, congue et est. Nullam efficitur, urna ut volutpat feugiat, nunc tortor tincidunt nibh, in fermentum purus lorem lacinia quam. Nunc porta felis ut nisl bibendum, sit amet consequat odio aliquam. Mauris mattis nisi nec metus tempus, at egestas urna fermentum. Pellentesque tristique cursus egestas. Vivamus quis viverra urna.

                    Duis sagittis tortor a gravida ultricies. Mauris pretium, odio varius bibendum porttitor, dolor mauris molestie sem, in tincidunt neque ante imperdiet quam. Cras eget tincidunt dolor. Suspendisse et diam ut tellus accumsan placerat. Suspendisse ultricies tellus odio, eu aliquet velit varius vitae. Proin convallis et enim ac ultrices. Sed congue vitae dui at lacinia. Vestibulum dignissim, nulla at venenatis convallis, magna arcu volutpat tortor, ac vehicula metus lorem quis tellus. Curabitur a augue libero. Donec et magna ac libero suscipit posuere a nec erat. Duis et est sapien. Proin arcu nunc, imperdiet vel sem ac, elementum tristique lorem. Pellentesque tristique vel est id gravida. Sed laoreet, justo sed condimentum maximus, felis magna egestas dui, quis commodo neque purus eu dui. Nulla mattis elit ligula, ac auctor nibh consequat et. Quisque eu odio lorem.

                    Phasellus fringilla quam non tellus rutrum bibendum. Etiam vulputate, nisl quis semper fringilla, purus mauris facilisis sapien, non convallis arcu mi vitae erat. Proin iaculis orci ut ante tincidunt mattis. Ut quis purus scelerisque, feugiat ligula ac, congue mauris. Fusce sed sollicitudin ipsum. Duis non vestibulum justo. Phasellus enim ipsum, faucibus sed eros a, tincidunt convallis sapien. Ut condimentum viverra massa, id vulputate orci hendrerit eget. Suspendisse metus ex, vestibulum ut sapien vitae, varius faucibus mi. Donec molestie lobortis nisl non tempor.

                    Suspendisse potenti. Vestibulum eget volutpat turpis. Ut hendrerit elementum auctor. Maecenas aliquet, eros id faucibus euismod, turpis nisl posuere est, vel elementum nulla nunc ut ligula. Donec viverra nisi sed tellus congue, lacinia molestie sem tincidunt. Nulla ullamcorper mi libero, ut feugiat augue pharetra vel. Donec eu molestie risus, non malesuada ipsum. Curabitur eleifend, sem nec maximus porttitor, risus tellus iaculis neque, ac maximus nulla mi id leo. Curabitur et nulla vitae odio auctor semper nec sit amet odio.

                    Maecenas metus turpis, convallis mollis euismod quis, pellentesque quis elit. Aliquam in euismod enim. Sed luctus viverra dolor, et bibendum massa mollis ac. Fusce porttitor ultrices urna, in mattis dolor. Etiam at pulvinar nisl. Ut dolor tortor, pulvinar hendrerit vestibulum et, laoreet nec elit. Ut ornare auctor neque, vel mattis magna consectetur sit amet. Fusce sollicitudin pellentesque nibh, sit amet imperdiet velit pellentesque eget. Aliquam semper, quam eget pretium dignissim, odio tortor elementum purus, eu aliquam lorem nisi sit amet nulla. Nam nibh ex, convallis in volutpat eu, commodo sed nibh. Nullam et luctus turpis.
                </S.Pad>
            </S.Content>
        </>
    )
}
