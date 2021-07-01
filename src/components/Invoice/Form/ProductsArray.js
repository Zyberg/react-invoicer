import InputField from '@/components/Form/InputField';
import { Table } from 'react-bootstrap';
import './style.css';

function ProductsArray({ items, updateItems, addItem, disabled, rateVat }) {
  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const nameString = target.name;
    const [namespace, index, name] = nameString.split('.');

    event.persist();

    updateItems(items.map((i, ind) => ind == index ? {...i, [name]: value} : i));
  }

  const getTotalPrice = (item) => {
    let total = parseFloat(item.quantity) * parseFloat(item.priceUnit)

    if (disabled)
      total = total * parseFloat(rateVat);

    return total.toFixed(2);
  }

  return (
    <>
      { items && !!items.length &&
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Price { disabled && 'w/o VAT'}</th>
              { disabled && <th>VAT</th>}
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{ index }</td>
                <td>
                  <InputField
                    name={`products.${index}.description`}
                    type="string"
                    value={item.description}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <InputField
                    name={`products.${index}.quantity`}
                    type="number"
                    value={item.quantity}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <InputField
                    name={`products.${index}.priceUnit`}
                    type="number"
                    value={item.priceUnit}
                    onChange={handleChange}
                  />
                </td>
                { disabled && (
                  <td>
                    { rateVat }
                  </td>
                )}
                <td>
                  { getTotalPrice(item) }
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              { disabled && <td></td> }
              <td>{ items.reduce((acc, item) => (acc += getTotalPrice(item), acc), 0).toFixed(2) }</td>
            </tr>
          </tbody>
        </Table>
      }

      { disabled || <button type="button" onClick={addItem}>Add</button> }
    </>
  )
}

export default ProductsArray;