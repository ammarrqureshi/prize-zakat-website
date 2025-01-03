import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import DecorPlus1 from 'assets/images/decor-plus-style-1.svg';
import Logo from 'assets/images/logo.svg';

export default function CompulsoryZakat() {
  const tabs = [
    {
      tabtitle: 'Islamic Banking',
      pointers: [
        {
          title: 'Hello title',
          desc: 'Lorem ipsum is it becos of the thing that matter alot ',
        },
        {
          title: 'Hello title',
          desc: 'Lorem ipsum is it becos of the thing that matter alot ',
        },
      ],
    },
    {
      tabtitle: 'Conventional Reserve Banking',
      pointers: [
        {
          title: 'Hello title',
          desc: 'Lorem ipsum is it becos of the thing that matter alot ',
        },
        {
          title: 'Hello title',
          desc: 'Lorem ipsum is it becos of the thing that matter alot ',
        },
      ],
    },
  ];
  return <div>{tabs[0].tabtitle}</div>;
}
