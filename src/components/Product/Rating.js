import React from 'react'
import './rating.css'

function Rating({value, count}) {
    const fullStar = parseInt(value);
    return (
    <div class="stars">
        {
            [1,2,3,4,5].map((v)=>{
                if(v<=fullStar){
                    return (<span class="star on"></span>)
                }
                else if(value%1!==0 && (v-fullStar)<=1){
                    return (<span class="star half"></span>)
                }
                else if(v>fullStar){
                    return (<span class="star"></span>)
                }
            })
        }
        <span class="counts">{count || 0}</span>
    </div>
    )
}

export default Rating
