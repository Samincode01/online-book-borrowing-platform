import React from 'react';
import Marquee from 'react-fast-marquee';

const Headline = () => {
    return (
        <div>
            <Marquee
  className="bg-primary text-white py-2 text-sm font-medium"
  scrollAmount="6"
>
  📚 New Arrivals: Atomic Habits | Deep Work | The Alchemist |
  🎉 Special Discount on Memberships — Get 20% Off This Week |
  🚚 Free Delivery on Orders Over $50
</Marquee>
        </div>
    );
};

export default Headline;