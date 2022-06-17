import { Button, Modal } from 'antd';

const ModalBox = ({
  title,
  isModalVisible,
  handleOk,
  handleCancel,
  releaseYear,
  data
}) => {

  return <>
    <Modal
      title={`Details of - ${title} Movie`}
      visible={isModalVisible}
      onOk={() => handleOk(releaseYear)}
      onCancel={handleCancel}
    >
      <h3>Click Ok to know <strong>Fun Fact of Releasing Year</strong></h3>
      <p>{data}</p>
    </Modal>;

  </>
}

export default ModalBox;
