import React, { useState } from 'react';
import {
    Container as MapDiv,
    Overlay,
    useMap,
    NaverMap,
    useNavermaps,
} from 'react-naver-maps';

//import MapPage from './MapPage';

function SearchCoord (Addr) {
    const map = useNavermaps();

    //const [lat, setLAT] = useState(37.5514706);
    //const [lng, setLNG] = useState(127.073884);

    let lat = 37.5514706;
    let lng = 127.073884;

    const geocoder = map.Service.geocode(
        {
            address : Addr,
        },
        function (status, response) {
            if (status !== map.Service.Status.OK) {
                console.log('ERROR!');
                return alert('something wrong!');
            }
            if (response.v2.meta.totalCount == 0) {
                return alert('올바른 주소를 입력해주세요');
            }
            //console.log(Addr);
            console.log('응답 : ', response);
            const result = response.result;
            console.log('결과 : ', result);
            const items = result.items;

            lat = items[0].point.y;
            lng = items[0].point.x;
            //setLAT(y); //위도
            //setLNG(x); //경도

            console.log(lat, lng);
        }
    );

    return ( 
        console.log("Success")
    );
}

function Buttonss() {
    const map = useMap();

    const [address, setAddress] = useState("");

    return (
        <div
        style={{
        position: "relative",
        }}
        >
        <input
        type="text"
        value={address}
        placeholder="주소를 입력하세요"
        //onChange={Home.handleChange}
        onChange={(event)=>
            setAddress(event.target.value)}
        />
        <button
        type="submit"
        onClick={()=>
            {const Addr=address;
            //console.log(Addr)
            SearchCoord(Addr)
        }}
        //console.log("주소 : ", address)}
        //onClick={ () => console.log("good")}
        >
        검색🔍
        </button>
        </div>
    );
}

export default Buttonss;