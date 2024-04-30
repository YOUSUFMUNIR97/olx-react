import React, { useState } from 'react';
import SMCountryBar from './SMCountryBar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchBar from './SMSearchBar';
import SMIcon from './SMIcon';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { ImageAspectRatioSharp } from '@mui/icons-material';
import SMSellButton from './SMSellButton';
import SMTags from './SMTags';

const SabHeader = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        // Here you can perform any action based on the search term
    };

    return (
        <div className='row' style={{ display: "flex", flexDirection: "row", alignItems: 'center', borderBottom: '1px solid #d8dfe0' }}>
            <div className='col-md-3 col-sm-6'>
                <SMCountryBar getValue={(e) => {
                    console.log('Apps.js', e)
                }}

                    countries={[
                        {
                            code: 'AD', label: 'Andorra', phone: '376'
                        },
                        {
                            code: 'AE',
                            label: 'United Arab Emirates',
                            phone: '971',
                        },
                        { code: 'AF', label: 'Afghanistan', phone: '93' },
                        {
                            code: 'AG',
                            label: 'Antigua and Barbuda',
                            phone: '1-268',
                        },
                        { code: 'AI', label: 'Anguilla', phone: '1-264' },
                        { code: 'AL', label: 'Albania', phone: '355' },
                        { code: 'AM', label: 'Armenia', phone: '374' },
                        { code: 'AO', label: 'Angola', phone: '244' },
                        { code: 'AQ', label: 'Antarctica', phone: '672' },
                        { code: 'AR', label: 'Argentina', phone: '54' },
                        { code: 'AS', label: 'American Samoa', phone: '1-684' },
                        { code: 'AT', label: 'Austria', phone: '43' },

                    ]} />
            </div>


            <div className='col-md-6 col-sm-12' style={{ position: "relative", }}>
                <SearchBar
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>


            <div className='col-md-3 col-sm-6 ' style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}}>

                <h5 className='m-2'>Login</h5>
                <SMIcon iconName={<ChatBubbleOutlineOutlinedIcon />} />

                <SMIcon iconName={<NotificationsOutlinedIcon />} />

                <SMSellButton />
            </div>


        </div>

    )


}

export default SabHeader;
