'use client'

import React, { useEffect } from 'react'
import { useField, NumberField } from '@payloadcms/ui'
import { NumberFieldClientComponent } from 'payload'

const CustomVNDField: NumberFieldClientComponent = ({ path, field, ...props }) => {
  const { value, setValue } = useField({ path })

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '4px',
      }}
    >
      <div
        style={{
          width: '70%',
          marginRight: '40px',
        }}
      >
        <NumberField {...props} field={field} path={path} />
      </div>
      <p style={{ marginTop: '10px' }}>
        ={' '}
        {value &&
          Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
            parseFloat(value),
          )}
      </p>
    </div>
  )
}

export default CustomVNDField
