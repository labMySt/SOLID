using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp8
{
    class DBProductProvider : IDBConfiguration, IProductItemProvider
    {
        public Product[] GetProductItem()
        {
            SetDBCofig();

            Product[] list = new Product[]{
               new Product(){name = "koubasa", ownPrice = new Price(){value = 3, currensy = "uah"} },
               new Product(){name = "vodka", ownPrice = new Price(){value = 40, currensy = "usd"} }
               };
            
            return list;
        }

        public void SetDBCofig()
        {
            Console.Write("set DB config\n");
        }

    }
}
