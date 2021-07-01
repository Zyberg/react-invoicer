import { useState } from 'react';
import ProductsArray from './ProductsArray';
import InputField from '@/components/Form/InputField';
import CountryField from '@/components/Form/CountryField';

function InvoiceForm({isReadOnly}) {
  const [ invoiceData, setInvoiceData ] = useState({
    companyName: undefined,
    companyAddress: undefined,
    billedCompanyName: undefined,
    billedAddress: undefined
  });

  const [ products, setProducts ] = useState([]);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setInvoiceData(currentData => ({...currentData, [name]: value}))
  }


  const addNewProduct = () => {
    setProducts(currentData => [...currentData, { price: 0 }])
  }

  const prefillForm = () => {
    setInvoiceData({
      companyName: 'Company GmbH',
      companyAddress: 'Berlin, Germany',
      country: 'Germany',
      billedCompanyName: 'Firma GmbH',
      billedAddress: 'Munich, Germany',
      billedCountry: 'Germany',
    });

    setProducts([
      {
        description: 'Bottle of milk',
        quantity: 2,
        priceUnit: 9.99
      }
    ])
  }


  return (
    <form>
      { isReadOnly || <button type="button" onClick={prefillForm}>Prefill</button> }

      <div className="row my-2">
        <div className="col-6">
          <InputField
            name="companyName"
            label="Company Name"
            type="string"
            value={invoiceData.companyName}
            onChange={handleChange}
            disabled={isReadOnly}
          />

          <CountryField
            label="Country"
            name="country"
            onChange={handleChange}
            disabled={isReadOnly}
          />

          <InputField
            name="address"
            label="Address"
            type="string"
            value={invoiceData.companyAddress}
            onChange={handleChange}
            disabled={isReadOnly}
          />
        </div>

        <div className="col-6">
          <InputField
            name="billedCompanyName"
            label="Company Name"
            type="string"
            value={invoiceData.billedCompanyName}
            onChange={handleChange}
            disabled={isReadOnly}
          />

          <CountryField
            label="Country"
            name="billedCountry"
            onChange={handleChange}
            disabled={isReadOnly}
          />

          <InputField
            name="billedAddress"
            label="Address"
            type="string"
            value={invoiceData.billedAddress}
            onChange={handleChange}
            disabled={isReadOnly}
          />
        </div>
      </div>

      <ProductsArray
        items={products}
        addItem={addNewProduct}
        updateItems={products => setProducts(products)}
        disabled={isReadOnly}
      />
    </form>
  );
}

export default InvoiceForm;
