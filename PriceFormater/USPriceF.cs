using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp8
{
    class USPriceF : IPriceFormator

    {
        public string CreateFormat(Price price)
        {

            return $"USA {price.value} {price.currensy}";
        }
    }
}
