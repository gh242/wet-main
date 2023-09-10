using Microsoft.EntityFrameworkCore;

namespace API.Entities
{
    [Keyless]
    public class BarcodeInvalid
    {
        public Guid ID { get; set; }
        public string Barcode { get; set; }
        public string EmpNo { get; set; }
        public Byte[] SnapShot { get; set; }
        public DateTime Stamp { get; set; }
        public string Remark { get; set; }
        public string Repack { get; set; }
        public string Times { get; set; }
    }
}