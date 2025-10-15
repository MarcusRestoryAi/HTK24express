/**
 * @swagger
 * /users:
 *   get:
 *     summary: Hämtar alla användare
 *     responses:
 *       200:
 *         description: Lyckad hämtning av användare
 */
app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Marcus' }]);
});
