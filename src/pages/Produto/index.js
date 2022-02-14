import { useState, React, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import {  } from './styles';
import { useUser } from '../../contexts/user';
import api from './../../services/api';


export default function Produto() {
    const {id} = useParams()
    return (
        <div>
            {id}
        </div>
    );
}