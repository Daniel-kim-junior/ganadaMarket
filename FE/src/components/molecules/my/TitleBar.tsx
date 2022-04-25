// /** @jsxImportSource @emotion/react */

import styled from "@emotion/styled";

interface TitleBarProps{
    title: string;
    size?: number;
    boundary?: string;
    src?: string;
}

function TitleBar({
    title,
    size,
    boundary = "3px solid #222",
    src,
    ...rest
}: TitleBarProps){
    return (
        <Molecule
            style={{
            }}
            {...rest}
        >
            <h3 style={{
                fontSize: `${size}px`,
            }}>{title}</h3>
        </Molecule>
    );
}

const Molecule = styled.div`
    
`
export default TitleBar;