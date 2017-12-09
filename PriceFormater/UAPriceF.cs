using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp8
{
    class UAPriceF : IPriceFormator
    {
        public string CreateFormat(Price price)
        {
            return $"UA {price.value} {price.currensy}";
        }
    }
}
