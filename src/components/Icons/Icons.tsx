import React from 'react';

export type IconFolderProps = {
    fill: any
}

const IconFolder = (props: IconFolderProps) => {
    console.log(props.fill);
    
    return (
        <svg width="26" height="21" viewBox="0 0 26 21" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3002 3.85317H13.2767L9.67481 0.464396C9.62899 0.422195 9.5687 0.398479 9.50593 0.397949H1.70038C1.15687 0.397949 0.717773 0.829852 0.717773 1.36444V19.2446C0.717773 19.7792 1.15687 20.2111 1.70038 20.2111H24.3002C24.8437 20.2111 25.2828 19.7792 25.2828 19.2446V4.81966C25.2828 4.28507 24.8437 3.85317 24.3002 3.85317ZM23.072 18.0365H2.92863V2.57256H8.71678L12.3893 6.02778H23.072V18.0365Z" fill="#FF8787"/>
        </svg>
    );
};

export default IconFolder;