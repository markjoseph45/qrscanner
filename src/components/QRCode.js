import React, { useState} from 'react'
import { QrReader } from 'react-qr-reader';
const QRCode = () => {
    const [data, setData] = useState('Result here');

    const handleResult = (result, error) => {
        if (!!result) {
            setData(result?.text);
        }

        if (!!error) {
            console.info(error);
        }
    }

    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-6 border mt-5 p-3 rounded'>
                    <h1 className='text-center' style={{fontWeight: 700}}>
                        QR Code Scanner
                    </h1>
                    <QrReader
                        onResult={(result, error) => handleResult(result, error)}
                        style={{ width: '100%' }}
                    />
                    <p className='text-center'
                    style={{fontWeight: 700}}>
                        {data}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QRCode