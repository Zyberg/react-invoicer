import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import InvoiceForm from './Form';
import Modal from '@/components/Modal';

function Invoice() {
  const [isInvoiceShown, setIsInvoiceShown] = useState(false);

  const generateInvoice = () => {
    setIsInvoiceShown(true);
  }

  const closeInvoice = () => {
    setIsInvoiceShown(false);
  }

  return (
    <div className="Invoice">
      <header>
        Invoice form
        <button type="button" onClick={generateInvoice}>Generate Invoice</button>
      </header>
      
      <InvoiceForm></InvoiceForm>

      <Modal
        show={isInvoiceShown}
        title="Invoice"
        handleClose={closeInvoice}  
      >
        <InvoiceForm isReadOnly></InvoiceForm>
      </Modal>
    </div>
  );
}

export default Invoice;
