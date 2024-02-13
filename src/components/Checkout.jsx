import {card} from '../assets';;
import styles, {layout} from '../style';
import Button from './Button'

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform actions with form data (e.g., submit to server)
        console.log('Form submitted:', formData);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
    
          <br />
    
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
    
          <br />
    
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </label>
    
          <br />
    
          <button type="submit">Submit</button>
        </form>
      );

    

    // <section className={layout.section}>
    //     <div></div>
    // </section>
}

export default Checkout