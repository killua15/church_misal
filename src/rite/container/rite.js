import React from "react";
import { Button, Divider, List, Row, Col, Typography, Select } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import "../rite.css";

const {Option} = Select;
const { Title } = Typography;
const Rite = () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  return (
    <>
      <Row style={{ marginTop: 20 }}>
        <Col span={15} style={{ marginLeft: 20 }}>
          <Title level={4}>Lista de Ritos</Title>
          <Divider></Divider>
          <List
            header={<div>Buscador</div>}
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Col>

        <Col style={{ marginLeft: 20 }} span={8}>
          <Title level={4}>Tipos de Ritos</Title>
          <Divider></Divider>
          <Row>
            <Col span={18} >
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Seleccione tipo de rito"
                optionFilterProp="children"
              >
                <Option value="saludos">Saludos</Option>
                <Option value="gloria">Gloria</Option>
                
              </Select>
            </Col>
            <Col span={4}>
            <Button type="primary" shape="circle" icon={<PlusOutlined />} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Rite;
