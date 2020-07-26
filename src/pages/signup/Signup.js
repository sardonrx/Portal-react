import React, { useState } from 'react';
import './Signup.css';
import { Button , Table, Space } from 'antd';


const Signup = () => {

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  // const name = "susan"
  // setName = (name) => {

  // }

  const [filteredInfo, setFilteredInfo] = useState('')
  const [sortedInfo, setSortedInfo] = useState('')
  
  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters)
    setSortedInfo(sorter)
  };

  const clearFilters = () => {
    setFilteredInfo(null)
  };

  const clearAll = () => {
    setFilteredInfo(null)
    setSortedInfo(null)
  };

  const setAgeSort = () => {

    setSortedInfo({
      order: 'descend',
      columnKey: 'age',
    })
  };

  const columns = [
    {
      title: 'Terminal Id',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Date',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      ellipsis: true,
    },
  ];

  
  return (
    <div 
      className='Signup-page'
    >
      <div 
        style={{
          display: 'flex',
          justifyContent:'flex-end'

        }}
      >
        <Button 
        style={{
          backgroundColor:'#1c42df',
          borderWidth:0
        }}
          type="primary"
        >
          Add Terminal
        </Button>
      </div>

      <div 
        style={{
          display:'flex',
          justifyContent:'flex-end'
        }}
      >
        <h1
          style={{
            margin: 0,
            marginRight: 100,
            marginTop: 10
          }}
        >
          Search
        </h1>

      </div>

      <div
        style={{
          // display:'flex',
          // justifyContent:'flex-start'
        }}
        >
          <Space style={{ marginBottom: 16 }}>
            <Button onClick={() => setAgeSort()}>Sort age</Button>
            <Button onClick={() => clearFilters()}>Clear filters</Button>
            <Button onClick={() => clearAll()}>Clear filters and sorters</Button>
          </Space>
          <Table 
            theme="dark"
            columns={columns} 
            dataSource={data} 
            onChange={() => handleChange()} 
          />

      </div>

      
      
    </div>
  );
}

export default Signup;