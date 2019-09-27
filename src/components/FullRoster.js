import React from 'react';
import PlayerAPI from '../api'
import {Link} from 'react-router-dom';

// The full roster iterates over all of the players and create a link to their profile page

const FullRoster = () => (
    <div>
        <ul>
            {
                PlayerAPI.all().map(p=>(
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

export default FullRoster;