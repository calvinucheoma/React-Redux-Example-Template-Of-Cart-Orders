import React, {useEffect} from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { clear_cart, get_totals} from "../actions";

const CartContainer = ({cart = [], total, clear_cart, get_totals}) => {

  useEffect(() => {

      get_totals();
  }, [cart, get_totals]);

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clear_cart}>clear cart</button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  return{
    cart: state.cart,
    total: state.total,
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    clear_cart: () => dispatch(clear_cart()),
    get_totals: () => dispatch(get_totals()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
