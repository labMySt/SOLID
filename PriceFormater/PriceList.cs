using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp8
{
    class PriceList
    {
        IPriceFormator ownPriceF;
        public void setOwnPriceF(IPriceFormator format)
        {
            ownPriceF = format;
        }

        Product[] listOfProducts;
        public void setListOfProducts(Product[] newList)
        {
            listOfProducts = newList;
        }

        public void ShowList()
        {
            foreach(Product prod in listOfProducts)
            {
                Console.WriteLine($"{prod.name} - {ownPriceF.CreateFormat(prod.ownPrice)}");
            }
        }
        public void ShowList(IPriceFormator newPriceFormator)
        {
            foreach (Product prod in listOfProducts)
            {
                Console.WriteLine($"{prod.name} - {newPriceFormator.CreateFormat(prod.ownPrice)}");
            }
        }
    }
}
