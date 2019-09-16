import React from 'react';
import  DownIcon from "../images/down.svg";

function Filter(){
    return (
        <div id="filters">
        <button id="filterBtn" onclick="closeFilter()" className="dropdown">
            Filters <span><img src={DownIcon} alt="" /></span>
        </button>
        <div id="dropdown-content" class="hide">
            <div className="filter-input">
                <select>
                    <option value="" disabled selected>Make</option>
                    <option value="Range">Range Rover</option>
                </select>
            </div>
            <div className="filter-input">
                <select>
                    <option value="" disabled selected>Condition</option>
                    <option value="new">New</option>
                    <option value="new">Used</option>
                    <option value="new">Both</option>
                </select>
            </div>
            <div className="filter-input">
                <select>
                    <option value="" disabled selected>Price</option>
                    <option value="200">Under $200</option>
                    <option value="400">Under $400</option>
                </select>
            </div>
            <div className="filter-input">
                <select>
                    <option value="" disabled selected>Body Type</option>
                    <option value="new">Car</option>
                    <option value="new">Truck</option>
                    <option value="new">Trailer</option>
                    <option value="new">Van</option>
                </select>
            </div>
            <button className="theme-color-btn btn" onclick="closeFilter()">
                SEARCH
            </button>
        </div>
    </div>
    )
}

export default Filter;