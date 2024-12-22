export default function Footer() {
    return (
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-xl">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:underline transition-colors duration-300">FAQs</a></li>
                <li><a href="#" className="hover:underline transition-colors duration-300">Delivery Information</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-xl">About MiniMarket</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline transition-colors duration-300">Our Story</a></li>
                <li><a href="#" className="hover:underline transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:underline transition-colors duration-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-xl">Policies</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#" className="hover:underline transition-colors duration-300">Returns Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-xl">Connect With Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline transition-colors duration-300">Facebook</a></li>
                <li><a href="#" className="hover:underline transition-colors duration-300">Twitter</a></li>
                <li><a href="#" className="hover:underline transition-colors duration-300">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>&copy; 2023 MiniMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }