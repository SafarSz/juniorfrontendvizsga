import { KarakterSzamolas, IrasjelSzamolas, ParatlanSzamokOsszege } from './web/feladat';
import { jest } from '@jest/globals'

//
//FUNDER, D. C. (1994, március). Judgemental process and content: Commentary on Koehler on base-rate. Psychology (online folyóirat) 5. (17) Elérhető: http://princeton.edu<br />

describe('Junior frontend fejlesztő szakma vizsgafeladat 3. feladat automatikus tesztelés', () => {
  describe('1. feladat', () => {
    it('1. Karakterek száma: 5: abcde', async () => {
      return expect(KarakterSzamolas("abcde")).toBe(5);
    });
    it('2. Karakterek száma: 6: AaBbCc', async () => {
      return expect(KarakterSzamolas("AaBbCc")).toBe(6);
    }); 
    it('3. Karakterek száma: 7: Aa Bb Cc', async () => {
      return expect(KarakterSzamolas("Aa Bb Cc")).toBe(8);
    }); 
    it('4. Karakterek száma: 16: Aa Bb Cc ;áéő)01', async () => {
      return expect(KarakterSzamolas("Aa Bb Cc ;áéő)01")).toBe(16);
    }); 
    it('5. Karakterek száma: 21: Árvíztűrő ütvefúrógép', async () => {
      return expect(KarakterSzamolas("Árvíztűrő ütvefúrógép")).toBe(21);
    }); 
    it('6. Karakterek száma: 256: MÜNNICH Á. (2004): Neurális és axiomatikus modellek a pszichológiában (Grastyán Endre előadás). A Magyar Pszichológiai Társaság XVI. Országos Nagygyűlése, Debrecen, 2004. május 27-29. Előadáskivonatok. A Debreceni Egyetem Pszichológiai Intézetének kiadványa. 98-99.', async () => {
      return expect(KarakterSzamolas("MÜNNICH Á. (2004): Neurális és axiomatikus modellek a pszichológiában (Grastyán Endre előadás). A Magyar Pszichológiai Társaság XVI. Országos Nagygyűlése, Debrecen, 2004. május 27-29. Előadáskivonatok. A Debreceni Egyetem Pszichológiai Intézetének kiadványa. 98-99.")).toBe(265);
    });
  });

  describe('2. feladat', () => {
    it('1. Írásjelek száma: 0: abcde', async () => {
      return expect(IrasjelSzamolas("abcde")).toBe(0);
    });
    it('2. Írásjelek száma: 1: abcde.', async () => {
      return expect(IrasjelSzamolas("abcde.")).toBe(1);
    });
    it('3. Írásjelek száma: 1: abcde,', async () => {
      return expect(IrasjelSzamolas("abcde,")).toBe(1);
    });
    it('4. Írásjelek száma: 2: :abcde;', async () => {
      return expect(IrasjelSzamolas(":abcde;")).toBe(2);
    });
    it('5. Írásjelek száma: 11: TÓTH L. (1999): Rávezető és közlő módszerek a tehetségesek oktatásában. In: BALOGH L. (szerk.): Tehetség és iskola. Kossuth Egyetemi Kiadó, Debrecen. 130–143.', async () => {
      return expect(IrasjelSzamolas("TÓTH L. (1999): Rávezető és közlő módszerek a tehetségesek oktatásában. In: BALOGH L. (szerk.): Tehetség és iskola. Kossuth Egyetemi Kiadó, Debrecen. 130–143.")).toBe(11);
    });
    it('6. Írásjelek száma: 6: BALOGH L. (szerk.) (1999): Tehetség és iskola. Kossuth Egyetemi Kiadó, Debrecen.', async () => {
      return expect(IrasjelSzamolas("BALOGH L. (szerk.) (1999): Tehetség és iskola. Kossuth Egyetemi Kiadó, Debrecen.")).toBe(6);
    });
    it('7. Írásjelek száma: 13: MÜNNICH Á. (2004): Neurális és axiomatikus modellek a pszichológiában (Grastyán Endre előadás). A Magyar Pszichológiai Társaság XVI. Országos Nagygyűlése, Debrecen, 2004. május 27-29. Előadáskivonatok. A Debreceni Egyetem Pszichológiai Intézetének kiadványa. 98-99.', async () => {
      return expect(IrasjelSzamolas("MÜNNICH Á. (2004): Neurális és axiomatikus modellek a pszichológiában (Grastyán Endre előadás). A Magyar Pszichológiai Társaság XVI. Országos Nagygyűlése, Debrecen, 2004. május 27-29. Előadáskivonatok. A Debreceni Egyetem Pszichológiai Intézetének kiadványa. 98-99.")).toBe(13);
    });
  });

  describe('3. feladat', () => {
    it('1. Páratlan számok összege: 0: 2,4', async () => {
      return expect(ParatlanSzamokOsszege([2,4])).toBe(0);
    });
    it('2. Páratlan számok összege: 9: 1,2,3,4,5', async () => {
      return expect(ParatlanSzamokOsszege([1,2,3,4,5])).toBe(9);
    });
    it('3. Páratlan számok összege: 25: 1,2,3,4,5,6,7,8,9', async () => {
      return expect(ParatlanSzamokOsszege([1,2,3,4,5,6,7,8,9])).toBe(25);
    });
    it('4. Páratlan számok összege: 2395: 3,12,12,123,123,123,123,345,345,34,53,45,24,123,1,231,23,123,2,43,45,36,34,523,4,2', async () => {
      return expect(ParatlanSzamokOsszege([3,12,12,123,123,123,123,345,345,34,53,45,24,123,1,231,23,123,2,43,45,36,34,523,4,2])).toBe(2395);
    });
    it('5. Páratlan számok összege: 584: 65,86,40,71,36,2,43,82,53,43,15,65,47,1,33,79,21,30,10,46,1,15,29,90,72,3', async () => {
      return expect(ParatlanSzamokOsszege([65,86,40,71,36,2,43,82,53,43,15,65,47,1,33,79,21,30,10,46,1,15,29,90,72,3])).toBe(584);
    });
  });
});  
