import { useState } from 'react';
import ModalPop from '../ui/Modal';
import { Button, Table, Input, Radio, Select } from 'antd';
import { createStyles } from 'antd-style';
import { useModal } from '../context/ModalContext';
import CreateAuction from '../ui/CreateAuction';

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }lo
        }
      }
    `,
  };
});

const dataSource = [
  {
    key: '2',
    name: 'Olivia',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '1',
    name: 'Ethan',
    age: 40,
    address: 'London Park',
  },
];
const Product = () => {
  const { openModal, isOpenModal, content, closeModal } = useModal();
  const [size, setSize] = useState('middle');
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const columns = [
    {
      title: 'Product Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    ,
    {
      title: 'Product Image',
      dataIndex: 'address',
      key: '1',
    },
    {
      title: 'Description',
      dataIndex: 'address',
      key: '2',
    },

    {
      title: 'Current Bid',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
      sorter: true,
    },
    {
      title: 'Bid period',
      dataIndex: 'address',
      key: '3',
    },
    {
      title: 'Bid',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => {
        return (
          <Button
            color="default"
            variant="outlined"
            onClick={() => openModal('placeBid')}
          >
            place Bid
          </Button>
        );
      },
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>...</a>,
    },
  ];

  const { styles } = useStyle();
  return (
    <>
      <div className="flex justify-end space-x-4 p-4 ">
        <h1 className=" font-bold text-gray-800 text-xl">All Products</h1>
        <Radio.Group value={size} onChange={handleSizeChange}>
          <Radio.Button value="large">Active Listing</Radio.Button>
          <Radio.Button value="middle"> Recent Listing</Radio.Button>
          <Radio.Button value="small">Inprogress</Radio.Button>
        </Radio.Group>
        <Select
          defaultValue={'SortByPrice'}
          options={[
            {
              value: 'SortByPrice',
              label: 'Sort By price',
            },
            {
              value: 'SortByHighestBid',
              label: 'Sort By Highest Bid',
            },
            {
              value: 'sortByBidTime',
              label: 'sort ByBid End Time',
            },
          ]}
        />
        <Button color="default" onClick={() => openModal('addAuction')}>
          Add Auction
        </Button>
      </div>
      <Table
        className={styles.customTable}
        pagination={true}
        columns={columns}
        dataSource={dataSource}
        scroll={{
          x: 'max-content',
        }}
      />
      {/* <Button>Add Product</Button> */}
      {isOpenModal && (
        <ModalPop open={isOpenModal} title="Place bid" close={closeModal}>
          {content === 'placeBid' ? (
            <>
              <Input placeholder="place bid" type="number" />
              <Button
                style={{
                  borderTop: 4,
                  display: 'block',
                  alignItems: 'center',
                  marginTop: 20,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              >
                Place Bid
              </Button>
            </>
          ) : content === 'addAuction' ? (
            <CreateAuction />
          ) : (
            ''
          )}
        </ModalPop>
      )}
    </>
  );
};
export default Product;
