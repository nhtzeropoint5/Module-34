import React, { use } from 'react';
import Card from '../card/Card';

const Pricing = ({pkk}) => {

    const pData = use(pkk);


    return (
        <div>
            <h2 className='text-5xl'>Get our Membership</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                {
                    pData.map(data => <Card key={data.id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default Pricing;