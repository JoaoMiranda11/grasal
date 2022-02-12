import React, { useEffect, useState } from 'react'

export default function Home (props) {
  return (
    <div>
      Bem vindo a Home! {props.children}
    </div>
  );
}
