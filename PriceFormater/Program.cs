using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp8
{
    class Program
    {
        static void Main(string[] args)
        {
            PriceList BigPrice = new PriceList();
            BigPrice.setOwnPriceF(new USPriceF());


            DBProductProvider Provider = new DBProductProvider();
            BigPrice.setListOfProducts(Provider.GetProductItem());

            BigPrice.ShowList();

            BigPrice.ShowList(new UAPriceF());

            Console.ReadKey();
        }
    }
}
